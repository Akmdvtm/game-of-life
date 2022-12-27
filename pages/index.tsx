import {Button, Htag, P, Rating, Tag} from "../components";
import {useEffect, useState} from "react";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
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

export default withLayout(Home);