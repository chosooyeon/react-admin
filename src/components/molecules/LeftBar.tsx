
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const LeftBar = () => {
    const location = useLocation();
    const [loc, setLoc] = useState('')
    const menu = [{'id':'menu', 'name':'메뉴관리'},
                    {'id':'user', 'name':'유저관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리'},
                    {'id':'app', 'name':'앱관리5'},
                    {'id':'app', 'name':'앱관리6'},
                    {'id':'app', 'name':'앱관리7'},
                    {'id':'app', 'name':'앱관리2'},
                ]

    useEffect(() => {
        setLoc(location.pathname)
    },[ location ])
    
    return(
        <>
            <section className='overflow-auto w-[120px] fixed h-[calc(100%-60px)] bg-[#f6f7fd] text-[rgba(56,56,56,0.7)]'>
                <ul className="space-y-2 ml-3 mt-3">
                {menu.map((item,idx)=>(
                    <li key={idx}>
                        <Link to={item.id}
                            className={loc.indexOf(item.id)!=-1 ? 'text-[#5d78ff]' : 'text-[rgba(56,56,56,0.7)]'}
                            key={idx}>{item.name}
                        </Link>
                    </li>
                ))}
                </ul>
            </section>
        </>
    )
}

export default LeftBar