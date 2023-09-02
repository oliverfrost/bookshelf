export default function Genre(props: { name: string }) {
    const {name} = props;

    return <span key={name}
                 className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{name}</span>

}