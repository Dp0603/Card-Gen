import React from "react";

function Card(props) {
  let [data, setData] = React.useState([]);
  let [updates, setUpdates] = React.useState(false);

  React.useEffect(() => {
    if (Object.keys(localStorage).length) {
      let arr = [];
      Object.keys(localStorage).map((key) => {
        arr.push(JSON.parse(localStorage[key]));
      });
      setData(arr);
    }
  }, []);

  const handleRefresh = () => {
    if (Object.keys(localStorage).length) {
      let arr = [];
      Object.keys(localStorage).map((key) => {
        arr.push(JSON.parse(localStorage[key]));
      });
      setData(arr);
      setUpdates(!updates);
    }
  };

  return (
    <div
      style={{
        marginLeft: "30%",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "20px",
        boxShadow: "2px 2px 2px 2px rgba(0,0,0,0.2)",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "white",
        width: "600px",
        height: "200px",
        textAlign: "center",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="garlic">
        <button className="btn btn-outline-dark" onClick={handleRefresh}>
          Refresh
        </button>
        <br />
      </div>
      <div style={{ overflowY: "auto", flexGrow: 1 }}>
        {Object.keys(data).length > 0 &&
          Object.keys(data).map((key) => (
            <div
              key={key}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                  padding: "10px",
                  cursor: "pointer",
                  fontSize: "20px",
                  fontWeight: "bold",
                  flexGrow: 1,
                }}
                onClick={() => {
                  props.setData(data[key]);
                }}
              >
                {data[key].name}
              </a>

              <button
                type="button"
                className="btn-custom-close"
                aria-label="Close"
                onClick={() => {
                  localStorage.removeItem(data[key].name);
                  handleRefresh();
                  setUpdates(!updates);
                }}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid red",
                  borderRadius: "50%",
                  fontSize: "20px",
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <span aria-hidden="true" style={{ color: "red" }}>
                  &times;
                </span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
