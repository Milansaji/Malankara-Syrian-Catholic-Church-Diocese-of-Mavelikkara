function Blocked() {
  return (
    <main className="blocked">
      <div className="blocked__panel">
        <div className="blocked__ornament" aria-hidden="true">
          ✛
        </div>
        <h1 className="blocked__title">Access Restricted</h1>
        <p className="blocked__text">
          This page cannot be viewed from the base address. Please open the
          personal link provided to you.
        </p>
      </div>
    </main>
  )
}

export default Blocked
