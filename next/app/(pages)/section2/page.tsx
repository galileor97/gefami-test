'use client'
import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@heroui/table";
import { Button } from '@heroui/react';
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, useDisclosure} from "@heroui/modal";
import { addToast } from "@heroui/toast";
import { Post } from '../../types';

export default function Section2() {
    const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure()
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null)
    const queryClient = useQueryClient()
    
    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const posts = await response.json()
            return posts.map((post: Post) => ({
                id: post.id,
                title: post.title,
                body: post.body
            }))
        }
    })

    const deleteMutation = useMutation({
        mutationFn: async (postId: number) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE',
            })
            if (!response.ok) {
                throw new Error('Failed to delete post')
            }
            return response.json()
        },
        onSuccess: (data, postId) => {
            //  optimistic update 
            queryClient.setQueryData(['products'], (oldData: Post[]) => {
                return oldData?.filter(post => post.id !== postId) || []
            })
            onClose()
            addToast({
                title: 'Post deleted',
                description: 'The post has been deleted successfully',
                color: 'success',
            })
        },
        onError: (error) => {
            console.error('Error deleting post:', error)
            addToast({
                title: 'Error',
                description: 'Failed to delete post',
                color: 'danger',
            })
        }
    })

    const handleDeleteClick = (postId: number) => {
        setSelectedPostId(postId)
        onOpen()
    }

    const handleConfirmDelete = () => {
        if (selectedPostId) {
            deleteMutation.mutate(selectedPostId)
        }
    }

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading data</div>

  return (
    <div className="p-10 bg-gray-100 h-dvh">
         <span className="text-sm text-gray-500">
         Question 3-6: API Request, Table, Delete & Key Removal
        </span>
     <Table>
       <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>TITLE</TableColumn>
          <TableColumn>BODY</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.map((post: Post) => (
            <TableRow key={post.id}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.body}</TableCell>
              <TableCell>
                <Button 
                    color="danger" 
                    variant="solid"
                    onPress={() => handleDeleteClick(post.id)}
                    isLoading={deleteMutation.isPending}
                >
                    Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
     </Table>
     <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
            <ModalHeader>
                <h1>Confirmation</h1>
            </ModalHeader>
            <ModalBody>
                <p>Are you sure you want to delete this post?</p>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" variant="solid" onPress={handleConfirmDelete}>
                    Delete
                </Button>
                <Button color="default" variant="solid" onPress={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
        </ModalContent>
     </Modal>
    </div>
  )
}
