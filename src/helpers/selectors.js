
export function getAppointmentsForDay(state, day) {
    const findDays = state.days.find(days => day === days.name);
    if (state.days.length === 0 || findDays === undefined) return [];
    return findDays.appointments.map(id => state.appointments[id]);
}

export function getInterview(state, interview) {
    if (interview && interview.interviewer) {
      const interviewer = state.interviewers[interview.interviewer]
      return {...interview, interviewer}
    }
    return null
  }

  export function getInterviewersForDay(state, day) {
    if (state.days.length === 0) {
      return []
    }
    const filteredDay = state.days.filter(d => d.name === day)
    if (filteredDay.length === 0) {
      return []
    }
    return filteredDay[0].interviewers.map(id => state.interviewers[id])
  }