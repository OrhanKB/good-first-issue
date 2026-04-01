"use client"

import Card from "@/components/card";
import { ComboboxDemo } from "@/components/combobox";
import { SliderRange } from "@/components/sliderRange";

export default function Home() {

  return (
    <main className="grid grid-cols-2 p-30">
      <div className="flex flex-col gap-y-8">
        <ComboboxDemo text={"Choose your language"} />
        <ComboboxDemo text={"Issue Label"} />
        <ComboboxDemo text={"Repository"} />
        <SliderRange />
        <hr className="max-w-md" />
        <div className="flex flex-col gap-y-5">
          <h3>Sort</h3>
          <ComboboxDemo text={"Sort by"} />
        </div>
      </div>

      <div>
        <Card />
      </div>
    </main>
  );
}
