export const Contact = ()=>{

    const handleFormSubmit = (formdata)=>{
        const data = Object.fromEntries(formdata.entries())
        console.log('this is data',data.username)

    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact us</h2>
            <div className="contact-wrapper container">

            <form action={handleFormSubmit} className="">
                <input type="text" className="form-control" placeholder="enter your name" name="username" required  autoComplete="off"/>
                <input type="email" className="form-control" placeholder="enter your email" name="email" required  autoComplete="off"/>
                <textarea rows="10" className="form-control" placeholder="enter your message" name="message" required  autoComplete="off"/>
                <button type="submit">Send</button>
            </form>
            </div>
        </section>
    )
}