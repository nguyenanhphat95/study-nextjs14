type Props = {
    params: {
        slug: string[]
    }
}
export default function SlugsPage({ params }: Props) {
    console.log('params-', params);

    return (
        <div>SlugsPage </div>
    )
}
