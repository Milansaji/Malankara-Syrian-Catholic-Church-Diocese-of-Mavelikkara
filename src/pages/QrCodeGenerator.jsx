import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'
import { getPriestList } from '../data/priests'

function QrCard({ priest }) {
  const canvasWrapRef = useRef(null)

  function handleDownload() {
    const canvas = canvasWrapRef.current?.querySelector('canvas')
    if (!canvas) return

    const link = document.createElement('a')
    link.download = `${priest.slug}-qrcode.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <article className="qr-card">
      <h2 className="qr-card__name">{priest.name}</h2>
      <p className="qr-card__url">{priest.profileUrl}</p>

      <div className="qr-card__code" ref={canvasWrapRef}>
        <QRCodeCanvas
          value={priest.profileUrl}
          size={220}
          level="H"
          includeMargin
          bgColor="#ffffff"
          fgColor="#2f2a24"
        />
      </div>

      <div className="qr-card__actions">
        <button type="button" className="qr-card__btn" onClick={handleDownload}>
          Download QR
        </button>
        <Link className="qr-card__link" to={`/p/${priest.slug}`}>
          Open profile
        </Link>
      </div>
    </article>
  )
}

function QrCodeGenerator() {
  const priests = getPriestList()
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()

  const filtered = q
    ? priests.filter((priest) => {
        const haystack = [
          priest.name,
          priest.documentName,
          priest.nativePlace,
          priest.slug,
        ]
          .join(' ')
          .toLowerCase()

        return haystack.includes(q)
      })
    : priests

  return (
    <main className="qr-page">
      <header className="qr-page__header">
        <div className="profile__ornament" aria-hidden="true">
          ✛
        </div>
        <p className="profile__eyebrow">QR Codes</p>
        <h1 className="qr-page__title">Priest Profile QR Generator</h1>
        <p className="qr-page__subtitle">
          Each code opens the matching personal profile. Download and print as
          needed.
        </p>

        <div className="qr-search">
          <label className="qr-search__label" htmlFor="qr-search">
            Search priests
          </label>
          <input
            id="qr-search"
            className="qr-search__input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, document name, or place…"
            autoComplete="off"
          />
        </div>
      </header>

      {filtered.length === 0 ? (
        <p className="qr-page__empty">No priests match “{query.trim()}”.</p>
      ) : (
        <section className="qr-page__grid" aria-label="Priest QR codes">
          {filtered.map((priest) => (
            <QrCard key={priest.slug} priest={priest} />
          ))}
        </section>
      )}
    </main>
  )
}

export default QrCodeGenerator
