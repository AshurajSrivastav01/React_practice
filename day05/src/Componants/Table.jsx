export function Table({ students }) {
    return (
        <>
            <h2>Student Data Table</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((data, index) => (
                        <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.class}</td>
                            <td>{data.age}</td>
                            <td>{data.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}