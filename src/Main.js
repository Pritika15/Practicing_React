export default function Main()
{
    return(
        <main>
            <h1 className="main--title">Fun facts about React </h1>
            {/* Though img is inline but as h1 tag is a block element so we move to the next line. */}
            <ul className="main--facts">
                <li>
                 Was first released in 2013.
                </li>
                <li>
                    Was originally created by Jordan Walke.
                </li>
                <li>
                    Has well over 100K stars on GitHub.
                </li>
                <li>
                    Is maintained by FaceBook.
                </li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps.
                </li>

            </ul>
        </main>

    )

}