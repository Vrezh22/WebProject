import React from 'react';
import style from './contactUs.module.css';
import Textarea from '../../components/Textarea';
import Button from '../../components/button';

const ContactUs = (props) => {
    return (
        <div className='container-fluid' style={{
            backgroundImage: "url(  https://pbs.twimg.com/media/EojUMb8XYAAHwuh.jpg )",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            paddingBottom: '80px',
            paddingTop: '40px'
        }}>
            <div className="container">
                <div class={style.infoBlock}>
                    <h1>Contact Us</h1>
                    <h3>Գյումրու Պատմությունը</h3>
                    <p>Գյումրի (ի սկզբանե Կումայրի, հետագայում մինչև 1840 թվականը՝ Գյումրի,
                    1840-1924 թվականներին՝ Ալեքսանդրապոլ, 1924-1990 թվականներին՝ Լենինական,
                    1990-1992 թվականներին Կումայրի), բնակչության քանակով ու մշակութային նշանակությամբ
                    Հայաստանի երկրորդ քաղաքն է, գտնվում է հյուսիսարևմտյան մասում՝ Շիրակի մարզում,
                    Ախուրյան գետի ձախ ափին, Երևանից 126 կմ հեռավորության վրա։ Տարածքը՝ 3626 հեկտար։
                    2015 թվականի դրությամբ ունեցել է 118,6 հազար բնակիչ[1], ծովի մակարդակից բարձր է
                    ավելի քան 1500 մետր։ Քաղաքի կարգավիճակ ունի 1837 թվականից։

                    Արևմտյան մասը բարձրադիր է՝ կազմված երկու սեղանաձև բարձունքներից։ Ռելիեֆը հարթավայրային է, քիչ
                    մասնատված, ծածկված 300 - 350 մ հաստությամբ լճագետային ու հրաբխային նստվածքներով։ Կլիման ցամաքային է,
                    համեմատաբար տաք ամառներով ու ցուրտ ձմեռներով։ Տարեկան միջին ջերմաստիճանը 7 °C է, հունվարինը՝ - 8 °C
                    (նվազագույնը՝ - 35 °C), հուլիսինը՝ 20 °C ։ Տարեկան տեղումները 500 մմ են։
                    Գտնվում է 8-9 բալանոց սեյսմիկ գոտում։ Վերջին ուժեղ երկրաշարժը տեղի է ունեցել 1988 թվականի դեկտեմբերի 7-ին։
                    Նախորդ երկրաշարժը տեղի է ունեցել 1926 թվականի հոկտեմբերի 22-ին։
                      </p>
                    <address>Ալամ Աշխարհի կենտրոն</address>
                </div>
                <form action="#" method="POST">
                    <Textarea placeholder="Write Your Message" name="message" />
                    <Button className={style.btn1}>Send</Button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;