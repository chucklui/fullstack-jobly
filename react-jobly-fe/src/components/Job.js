

function Job({ job }){
  return (
    <div className="Job">
      <h1 className="Job-title">{job.title}</h1>
      <p className="Job-salary">{job.salary}</p>
      {job.equity && <p className="Job-equity">{job.equity}</p>}
    </div>
  )
}
export default Job;