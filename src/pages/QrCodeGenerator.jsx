import { useRef } from 'react'
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
        <a
          className="qr-card__link"
          href={priest.profileUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open profile
        </a>
      </div>
    </article>
  )
}

function QrCodeGenerator() {
  const priests = getPriestList()

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
      </header>

      <section className="qr-page__grid" aria-label="Priest QR codes">
        {priests.map((priest) => (
          <QrCard key={priest.slug} priest={priest} />
        ))}
      </section>
    </main>
  )
}

export default QrCodeGenerator
