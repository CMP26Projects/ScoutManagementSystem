export default function TestLayout() {
  return (
    <>
      <div className="container">Test Layout</div>
      <section style={{ textAlign: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-2" style={{ background: "red" }}>
              Test Layout
            </div>
            <div className="col-2" style={{ background: "magenta" }}>
              Test Layout
            </div>
          </div>
          <div className="row">
            <div className="col-3" style={{ background: "blue" }}>
              Test Layout
            </div>
            <div className="col-3" style={{ background: "yellow" }}>
              Test Layout
            </div>
            <div className="col-3" style={{ background: "red" }}>
              Test Layout
            </div>
          </div>

          <div className="row">
            <div className="col-4">Test Layout</div>
            <div className="col-4">Test Layout</div>
            <div className="col-4">Test Layout</div>
          </div>
          <div className="row">
            <div className="col-2">Test Layout</div>
            <div className="col-2">Test Layout</div>
            <div className="col-4">Test Layout</div>
          </div>
        </div>
      </section>
    </>
  );
}
