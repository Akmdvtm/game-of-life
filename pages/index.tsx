import {Htag, P, Tag} from "../components";
import {Button} from "../components";
import {useEffect, useState} from "react";
import {Rating} from "../components/Rating/Rating";

export default function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log(counter);
        return function cleanup() {
            console.log('Unmount');
        };
    }, []);

    return (
        <>
            <Rating rating={4} isEditable={true}/>
            <Htag tag='h1'>{counter}</Htag>
            <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Button</Button>
            <Button appearance='ghost' arrow='down'>Button</Button>
            <P size='l'>Big</P>
            <P>Medium</P>
            <P size='s'>Small</P>
            <Tag size='m' color='red'>Small</Tag>
            <Tag size='s'>Ghost</Tag>
            <Tag size='m' color='green'>Green Small</Tag>
            <Tag size='s' color='primary'>Small</Tag>
        </>
    );
}
