const API = 'https://test.swipejobs.com/api/worker/';

export async function fetchProfile(workerId) {
    const profileAPI = `${API}${workerId}/profile`;
    let response = await fetch(`${profileAPI}`);
    return response.json();
}

export async function fetchAllJobs(workerId) {
    const AllJobsAPI = `${API}${workerId}/matches`;
    let response = await fetch(`${AllJobsAPI}`);
    return response.json();
}

export async function acceptJob(workerId, jobId) {
    const acceptJobAPI = `${API}${workerId}/job/${jobId}/accept`;
    let response = await fetch(`${acceptJobAPI}`);
    return response.json();
}

export async function rejectJob(workerId, jobId) {
    const rejectJobAPI = `${API}${workerId}/job/${jobId}/reject`;
    let response = await fetch(`${rejectJobAPI}`);
    return response.json();
}