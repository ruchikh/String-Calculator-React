const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    calculatorBox: {
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        maxWidth: "400px",
        width: "100%"
    },
    inputBox: {
        width: "80%",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    calculateButton: {
        width: "50%",
        padding: "10px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    result: {
        marginTop: "10px",
        color: "green",
    },
    error: {
        marginTop: "10px",
        color: "red",
    },
};

export default styles;
