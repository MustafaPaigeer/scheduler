import Appointment from "components/Appointment";




export function getAppointmentsForDay(state, day) {
    const findDays = state.days.find(days => day === days.name);
    if (state.days.length === 0 || findDays === undefined) return [];
    return findDays.appointments.map(id => state.appointments[id]);
}
