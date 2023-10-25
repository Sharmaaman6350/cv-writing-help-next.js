


const AssignmentForm = () => {
    return (

        <div className="bg-primary p-4">
            <h5 className="text-white text-center">Get Your Dream Job with Professional CV</h5>
            <form action="" className="mt-4">
                <input type="text" className="form-control mainVin mb-3" placeholder="Enter Your Name" required />
                <input type="email" className="form-control mainVin mb-3" placeholder="Email ID" required />
                <input type="tel" className="form-control mainVin mb-3" placeholder="Your Phone" required />
                <select name="" className="form-select mainVin mb-3" id="" required>
                    <option value="">Work Experience</option>

                    <option value="">1 Year Experience</option>
                    <option value="">2 Year Experience</option>
                    <option value="">3 Year Experience</option>
                    <option value="">4 Year Experience</option>
                    <option value="">5 Year Experience</option>
                    <option value="">6 Year Experience</option>

                </select>
                <select name="" className="form-select mainVin mb-3" id="" required>
                    <option value="">Select Services</option>

                    <option value="">1 Year Experience</option>
                    <option value="">2 Year Experience</option>
                    <option value="">3 Year Experience</option>
                    <option value="">4 Year Experience</option>
                    <option value="">5 Year Experience</option>
                    <option value="">6 Year Experience</option>

                </select>
                <textarea name="" className="form-control mb-3" rows={4}
                    placeholder="Enter Your Message" required />
                <input type="submit" className="btn btn-warning form-control fw-bold rounded-1 py-2" />

            </form>

        </div>

    )
}


export default AssignmentForm;