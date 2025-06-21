"use client";
import {Button} from "@heroui/button";
import {useState} from "react";
import { Product } from '../types';

const products: Product[] = require("../data/product.json");

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [labelValue, setLabelValue] = useState(products[0].name);
  
  const changeLabelValue = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(nextIndex);
    setLabelValue(products[nextIndex].name);
  };

  return (
    <div className="grid items-start justify-items-center min-h-screen p-8 gap-16 sm:p-20">
      <div className="flex justify-center items-center gap-20">
        <div className="rounded-lg border border-gray-300 p-4 gap-4 ">
          <h1 className="text-2xl font-bold pb-3 border-b border-gray-300">
            List of products
          </h1>
          <div className="flex flex-col gap-2 pt-4">
            {products.map((product: Product) => (
              <div key={product.id}>{product.name}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-96">
          <span className="text-sm text-gray-500">
            Label Value:
          </span>
          <h1 className="text-2xl font-bold">{labelValue}</h1>
          <Button
            className="w-1/2"
            color="primary"
            variant="solid"
            onPress={changeLabelValue}
          >
            Change Label
          </Button>
        </div>
      </div>
    </div>
  );
}
