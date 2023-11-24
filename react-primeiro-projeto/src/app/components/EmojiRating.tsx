type Props = {
    rate: number;
};

export const EmojiRating = ({ rate }: Props) => {

    if (rate < 0) rate = 0;
    if (rate > 5) rate = 5;

    const rateInt = Math.floor(rate);

    let stars = [" ","🤬","😡","😐","🙂","😍"];


return (
        <>

            <div className="text-6xl bg-slate-500 rounded p-3">{rate.toFixed(1)}</div>
            <div className="text-6xl">{stars[rateInt].repeat(rateInt)}{"😶".repeat(5 - rateInt)}</div>
        </>
    );
};
