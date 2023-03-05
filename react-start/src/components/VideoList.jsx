const videos= [
    {
        name: 'video 1',
        duration:13,
        id: 1
    },
    {
        name: 'video 2',
        duration:15,
        id: 2
    },
    {
        name: 'video 3',
        duration:14,
        id: 3
    }
];

export function VideoList(){
    return (
        <>
        <h1>video list 1</h1>
        {
            videos.map((video)=>{
                return(
                <div key={video.id}>
                    <p>{video.name}</p>
                    <p>{video.duration}</p>
                    <button>Like</button>
                </div>);
            })
        }
        </>
    );
}