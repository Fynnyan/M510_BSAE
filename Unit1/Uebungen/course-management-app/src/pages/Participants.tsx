import React, {useState} from 'react'
import {participantsData, coursesData, Participant} from '../data/mockData'
import {NavLink} from "react-router-dom";

const participantFilter = (participant: Participant, word: string) => {
    return participant.name.toLowerCase().includes(word) || participant.email.toLowerCase().includes(word)
}

function Participants(): React.ReactElement {
    // Hilfsfunktion um Kurstitel von ID zu erhalten
    const getCourseTitle = (courseId: number): string => {
        const course = coursesData.find(c => c.id === courseId)
        return course ? course.title : 'Unbekannter Kurs'
    }

    const [filter, setFilter] = useState<string | null>(null)
    const [courseFilter, setCourseFilter] = useState<string | null>(null)

    return (
        <div>
            <h1 className="page-title">Teilnehmende</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    marginBottom: "1rem",
                }}
            >
            <label htmlFor={"search"}>Suche</label>
            <input
                name={"search"}
                type={"text"}
                onChange={(event) => setFilter(event.target.value.toString())}
            />
            <select
                onChange={(event) => setCourseFilter(event.target.value)}
            >
                ${coursesData.map(c =>  <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>E-Mail</th>
                        <th>Zugewiesener Kurs</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        participantsData
                            .filter(p => courseFilter ? p.courseId.toString() == courseFilter : true)
                            .filter(p => filter ? participantFilter(p, filter.toLowerCase()) : true)
                            .map(participant => <ParticipantElement
                                participant={participant}
                                courseTitle={getCourseTitle(participant.courseId)}/>)
                    }
                    </tbody>
                </table>
            </div>
            {/*      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '8px', borderLeft: '4px solid #ffc107' }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>⚠️ Bekannte Lücken:</h3>
        <ul style={{ color: '#555', lineHeight: '1.8', marginLeft: '20px' }}>
          <li>Teilnehmerstatus wird nicht angezeigt</li>
          <li>Keine Möglichkeit, Teilnehmende hinzuzufügen/zu bearbeiten</li>
        </ul>
      </div> 
      */}

        </div>
    )
}

const ParticipantElement = (props: { participant: Participant, courseTitle: string }) => {
    const participant = props.participant
    return <tr key={participant.id}>
        <td><NavLink to={`/participants/${participant.id}`}>{participant.name}</NavLink></td>
        <td>{participant.email}</td>
        <td>{props.courseTitle}</td>
    </tr>
}

export default Participants
