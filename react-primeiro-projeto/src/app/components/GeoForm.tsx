import { Circle } from "./Circle";
import { Square } from "./Square";

export const GeoForm = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold">GeoForm</h3>
            <div>
                <h3 className="text-2xl font-bold">Formas Geometricas</h3>

                <div className="flex gap-2 border-2 p-3">
                    <Square />
                    <Circle />
                </div>
            </div>
        </div>
    );
}

