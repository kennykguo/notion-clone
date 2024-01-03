"client component";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                New year, new plans.
            </h1>
            <h3 className = "text-base sm:text-xl md:text-2xl font-medium">
                Your workspace to write, organize, and collaborate. With AI by your side
            </h3>
            <Button className="font-bold">
                Get Notion Free
                <ArrowRight className="h-5 w-5 ml-2"/>
            </Button>
        </div>
    );
}
 
export default Heading;