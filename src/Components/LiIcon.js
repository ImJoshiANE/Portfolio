const LiIcon = () => {
  return (
    <figure className=" absolute left-0 stroke-dark ">
        <svg className="-rotate-90" width="75" height="75"  viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className="stroke-primary storke-1 fill-none"/>
            <circle cx="75" cy="50" r="20" className="storke-[5px] fill-light"/>
            <circle cx="75" cy="50" r="10" className="storke-1 fill-primary"/>
        </svg>
    </figure>
  )
}

export default LiIcon