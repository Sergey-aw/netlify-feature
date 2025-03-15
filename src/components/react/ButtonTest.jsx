import React from 'react';
import { Button } from "../ui/button"; 

const ButtonTest = () => {
  return (
    
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Button Test</h2>
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
    
  );
}

export default ButtonTest;