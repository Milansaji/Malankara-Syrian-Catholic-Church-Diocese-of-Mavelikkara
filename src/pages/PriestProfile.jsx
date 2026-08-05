import { useParams } from 'react-router-dom'
import { getPriest } from '../data/priests'
import InfoCard from '../components/InfoCard'
import Blocked from './Blocked'

const fields = [
  { key: 'documentName', label: 'Name as given in Documents' },
  { key: 'nativePlace', label: 'Native Place' },
  { key: 'father', label: 'Father' },
  { key: 'mother', label: 'Mother' },
  { key: 'bornOn', label: 'Born on' },
  { key: 'bloodGroup', label: 'Blood Group' },
  { key: 'ordained', label: 'Ordained priest on' },
  { key: 'permanentAddress', label: 'Permanent Address' },
  { key: 'emergencyContact', label: 'Contact in case of emergency' },
]

function PriestProfile() {
  const { slug } = useParams()
  const priest = getPriest(slug)

  if (!priest) {
    return <Blocked />
  }

  return (
    <main className="profile">
      <header className="profile__header">
        <div className="profile__ornament" aria-hidden="true">
          ✛
        </div>
        <p className="profile__eyebrow">Priest Profile</p>
        <h1 className="profile__name">{priest.name}</h1>
      </header>

      <section className="profile__grid" aria-label="Personal details">
        {fields.map(({ key, label }) => (
          <InfoCard key={key} label={label} value={priest[key]} />
        ))}
      </section>
    </main>
  )
}

export default PriestProfile
