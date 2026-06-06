import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { participantsData, coursesData } from '../data/mockData'

function ParticipantDetail(): React.ReactElement {
  const { id } = useParams<{ id: string }>()
  const participant = participantsData.find(p => p.id === Number(id))

  if (!participant) {
    return (
      <div>
        <h1 className="page-title">Teilnehmende nicht gefunden</h1>
        <NavLink to="/participants">← Zurück zur Übersicht</NavLink>
      </div>
    )
  }

  const course = coursesData.find(c => c.id === participant.courseId)

  return (
    <div>
      <NavLink to="/participants">← Zurück zur Übersicht</NavLink>
      <h1 className="page-title">{participant.name}</h1>

      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{participant.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{participant.name}</td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>{participant.email}</td>
            </tr>
            <tr>
              <th>Kurs</th>
              <td>{course ? course.title : 'Unbekannter Kurs'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ParticipantDetail
