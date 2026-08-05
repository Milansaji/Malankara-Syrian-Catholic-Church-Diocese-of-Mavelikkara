function InfoCard({ label, value }) {
  if (!value) return null

  return (
    <article className="info-card">
      <p className="info-card__label">{label}</p>
      <p className="info-card__value">{value}</p>
    </article>
  )
}

export default InfoCard
