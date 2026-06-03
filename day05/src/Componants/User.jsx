export function User({data}){
    return(
        <>
            <div style={{
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                border: "1px solid",
                padding: "14px 24px",
                borderRadius: "16px",
                marginBottom: "1rem"
            }}>
                <h3 style={{ margin: "0px", marginBottom: "5px" }}><strong>Name: </strong>{data.name}</h3>
                <h3 style={{ margin: "0px", marginBottom: "5px" }}><strong>Age: </strong>{data.age}</h3>
                <h3 style={{ margin: "0px", marginBottom: "5px" }}><strong>Gender: </strong>{data.gender}</h3>
                <h3 style={{ margin: "0px", marginBottom: "5px" }}><strong>Class: </strong>{data.class}</h3>
            </div>
        </>
    );
}