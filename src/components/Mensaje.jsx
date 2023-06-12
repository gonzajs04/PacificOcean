export default function Error({mensaje, clase}){

  return(
    <div className={`container-msg-mail ${clase}`}>
        <p>{mensaje}</p>
    </div>

  )
}