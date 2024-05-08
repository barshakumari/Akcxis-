import { Link } from "react-router-dom"

const CountryCard = ({ img, countryName, isBadge, badgeLink, points }) => {
    return <>
        <div className='cardbox border border-dark border-opacity-25 rounded-3 shadow-lg'>
            <div className='d-flex justify-content-center'>
                <img src={img} alt="" className="img-fluid  w-100" />
            </div>
            <h5 className="text-center mt-2">
                <span>{countryName}
                    {
                        isBadge && <Link to={badgeLink} class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                            PR
                            <span class="visually-hidden">unread messages</span>
                        </Link>
                    }
                </span>
            </h5>
            <ul type="disc" className='country-list'>
                {
                    points && points.map((point, idx) => <li key={idx}><Link href={point.href}>{point.label}</Link></li>)
                }
            </ul>
        </div>
    </>
}

export default CountryCard