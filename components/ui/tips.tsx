import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

export default function Tips() {
    return(
        <ToggleGroup variant="tip_1" type="single" className="gap-2">
            <ToggleGroupItem value="0%" aria-label="Toggle bold">0%</ToggleGroupItem>

            <ToggleGroupItem value="+5%" aria-label="Toggle italic">+5%</ToggleGroupItem>

            <ToggleGroupItem value="+10%" aria-label="Toggle underline">+10%</ToggleGroupItem>
        </ToggleGroup>
    )
}