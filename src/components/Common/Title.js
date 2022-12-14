import { LineSvg } from '../Common/Icons';
import { FC } from 'react';
interface TitleProps {
    num: number;
    title: string;
}

const Title: FC<TitleProps> = ({ num, title }) => {
    return (
        <div
            className="flex items-center w-full mt-20"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
        >
            <h2 className="text-3xl md:text-4xl text-text text-backcolor font-bold">
                <span className=" text-backcolor text-neon font-fira">0{num}.</span> {title}
            </h2>
            <LineSvg className="bg-backcolor mt-1 relative md:w-96 hidden md:inline-flex !ml-10" />
        </div>
    );
};


export default Title;