import { Slider } from "@/components/ui/slider"

export function SliderRange() {
    return (
        <div className="flex">
            <div>Repo Stars:</div>
            <Slider
                defaultValue={[25, 50]}
                max={100}
                step={5}
                className="mx-auto w-full max-w-xs ml-10"
            />
        </div>

    )
}
