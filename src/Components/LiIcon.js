const LiIcon = () => {
  return (
    <figure className=" absolute left-0 stroke-dark dark:stroke-light">
        <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px] " width="75" height="75"  viewBox="0 0 100 100">
            <circle cx="75" cy="50" r="20" className="stroke-primary storke-1 fill-none dark:stroke-primaryDark"/>
            <circle cx="75" cy="50" r="20" className="storke-[5px] fill-light dark:fill-dark"/>
            <circle cx="75" cy="50" r="10" className="storke-1 fill-primary dark:fill-primaryDark"/>
        </svg>
    </figure>
  )
}

export default LiIcon