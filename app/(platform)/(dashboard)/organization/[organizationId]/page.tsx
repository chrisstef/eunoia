import { db } from "@/lib/db";
import { Board } from "./board";
import { Form } from "./form";

const page = async () => {
    const boards = await db.board.findMany();
    return (
        <div className="flex flex-col space-y-4">
            <Form />
            <div className="space-y-2">
                {boards.map((board: any) => (
                    <Board title={board.title} key={board.id} id={board.id} />
                ))}
            </div>
        </div>
    );
};

export default page;
