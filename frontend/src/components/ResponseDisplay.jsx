const ResponseDisplay = ({ data }) => {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );
};

export default ResponseDisplay;