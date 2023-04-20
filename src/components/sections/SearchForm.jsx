import React, { useState } from 'react';

const SearchForm = () => {
    const [catSelection, setCatSelection] = useState('');

    const categories = [
        "Accounting",
        "Account Management",
        "Administration and Office",
        "Advertising and Marketing",
        "Animal Care",
        "Arts",
        "Business Operations",
        "Computer and IT",
        "Construction",
        "Corporate",
        "Customer Service",
        "Data and Analytics",
        "Data Science",
        "Design",
        "Development",
        "Editing",
        "Education",
        "Entertainment and Travel Services",
        "Farming and Outdoors",
        "Food and Hospitality Services",
        "Healthcare",
        "Human Resources and Recruitment",
        "Installation, Maintenance, and Repairs",
        "IT",
        "Legal Services",
        "Management",
        "Manufacturing and Warehouse",
        "Marketing",
        "Media, PR, and Communications",
        "Mental Health",
        "Office Administration",
        "Personal Care and Services",
        "Product Management",
        "Project Management",
        "Public Relations",
        "Real Estate",
        "Recruiting",
        "Retail",
        "Sales",
        "Science and Engineering",
        "Social Services",
        "Sports, Fitness, and Recreation",
        "Telemarketing",
        "Transportation and Logistics",
        "UI/UX Design",
        "Videography",
        "Web Design",
        "Writing and Editing"
    ]

    return (
        <div className="searchFormContainer">
            <form action="#">
                <div className='flexContainer'>
                    <div className="searchForm keyword">
                        <label htmlFor="keyword">Job title, Keywords or Company</label>
                        <input type="text" id="keyword" name="keyword" />
                    </div>
                    <div className="searchForm category">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category">
                            <option value disabled selected>All categories</option>
                            {/* <option value="webDevelopment">Web Development</option> */}
                            {
                                categories.map( category => <option value={category} key={category}>{category}</option>)
                            }
                        </select>
                    </div>
                </div>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;