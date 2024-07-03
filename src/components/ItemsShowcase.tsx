export const ItemsShowcase = ({ items }: { items: unknown[] }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {items.map((item: unknown, index: number, array: unknown[]) => (
                    <div key={index} className="flex flex-col gap-2">
                        <img
                            src="/media/checkmark.jpg"
                            width={25}
                            alt="Checkmark"
                        />
                        <div className="text-2xl font-bold">
                            {(item as { title: any; description: any }).title}
                        </div>
                        <p className="">
                            {
                                (item as { title: any; description: any })
                                    .description
                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
