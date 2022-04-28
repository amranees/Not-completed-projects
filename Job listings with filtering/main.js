let jobs_container = document.querySelector('.jobs-container');
let exit = true;


(async function() {
    let data = await (await fetch('./data.json')).json();
    data
        .forEach(ele => {
            // check `new`
            let newTrue = '';
            let featuredTrue = ''
            if (ele.new) {
                newTrue = 'NEW!';
            }

            // check feature
            if (ele.featured) {
                featuredTrue = 'FEATURED';
            }

            // Functions to add languages
            function langs() {
                if (ele.languages) {
                    let langs = document.createElement('div');
                    langs.classList.add('langs');
                    langs.style.display = 'inline-block'
                    for (let i = 0; i < ele.languages.length; i++) {
                        let lang = document.createElement('span');
                        lang.classList.add('filter-box')
                        lang.append(ele.languages[i])
                        langs.append(lang)
                    }
                    return langs;
                }

            }
            let job_box = document.createElement('div');
            job_box.classList.add('job-box');

            // Set data
            job_box.setAttribute(`data-role`, ele.role);
            job_box.setAttribute('data-level', ele.level);
            job_box.setAttribute('data-tools', ele.tools)

            for (let i = 0; i < ele.languages.length; i++) {
                job_box.dataset.languages = ele.languages.join(" ")
                job_box.setAttribute('data-languages', ele.languages.join(' '));
            }

            job_box.innerHTML = `
                <div class="left">
                    <img src=${ele.logo} alt="" class="profile-img">
                    <div class="txt">
            
                        <div class="header">
                            <span class="company">${ele.company}</span>
                            <span class="new">${newTrue}</span>
                            <span class="featured">${featuredTrue}</span>
                        </div>
            
                        <div class="title">
                            ${ele.position}
                        </div>
            
                        <div class="footer">
                            <span class="posted">${ele.postedAt}</span>
                            <span class="contract">${ele.contract}</span>
                            <span class="location">${ele.location}</span>
                        </div>
                    </div>
                </div>
                        
                <div class="right">
                <span class="filter-box role">${ele.role}</span>
                    <span class="filter-box level">${ele.level}</span>
                    
                </div>
        
            `;
            job_box.querySelector('.right').append(langs())
            jobs_container.append(job_box);

            // check new and featrued if has children or not 
            let checkNew = job_box.querySelector('.new');
            let checkFeatured = job_box.querySelector('.featured');
            if (!(checkNew.hasChildNodes())) {
                checkNew.remove();
            }

            if (!(checkFeatured.hasChildNodes())) {
                checkFeatured.remove();
            }
        });


    // Add filter boxes to `filter-container`
    let filter_job = document.querySelectorAll('.job-box .filter-box');
    let filter_container = document.querySelector('.filter-field .filter-container');


    function addFilter() {

        let arr = []
        for (let i = 0; i < filter_job.length; i++) {

            filter_job[i].onclick = () => {
                let filter_box = document.createElement('div');
                filter_box.classList.add('filter-box');

                // Adding filter just once
                if (!(arr.includes(filter_job[i].textContent))) {
                    console.log('hi')
                    filter_box.innerHTML = `<span>${filter_job[i].textContent}</span><div class="remove"><img src="./images/icon-remove.svg" alt=""></div>`
                    filter_container.append(filter_box);
                    filtering(filter_job[i].textContent);
                }
                arr.push(filter_job[i].textContent);

                // check count again_job[i]
                removeFilterBox();

            }
        }
    }
    addFilter();

    // clear filter field 
    let clear = document.querySelector('.clear');
    clear.onclick = () => {
        filtering(null, true);
        filter_container.innerHTML = '';

        addFilter();
    }


    // remove an filter box 
    function removeFilterBox() {
        let remove = document.querySelectorAll('.remove');
        for (let i = 0; i < remove.length; i++) {
            remove[i].onclick = () => {
                let parent = remove[i].parentElement;
                filtering(parent.querySelector('span').textContent, true)
                    // console.log(parent.querySelector('span').textContent)
                parent.remove();

                addFilter();


            }

        }
    }

    removeFilterBox();


    // Filtering
    let arr = [];

    function filtering(filter = null, removeFilter = false) {
        let allJobsBox = document.querySelectorAll('.job-box');
        if (filter !== null && removeFilter === false) {

            arr.push(filter);
        }
        // console.log(allJobsBox);
        for (let i = 0; i < allJobsBox.length; i++) {
            let languages = allJobsBox[i].getAttribute('data-languages').split(' ');
            console.log(allJobsBox[i].getAttribute('data-languages'))
            let langsarr = allJobsBox[i].getAttribute('data-languages').split(' ');



            for (let j = 0; j < arr.length; j++) {

                if (allJobsBox[i].getAttribute('data-role') !== arr[j] &&
                    allJobsBox[i].getAttribute('data-level') !== arr[j] &&
                    removeFilter === false) {
                    allJobsBox[i].setAttribute('data-remove', 'remove');
                    allJobsBox[i].style.display = 'none';
                }




                languages.forEach(lang => {

                    if (lang === arr[j]) {
                        console.log(true);
                        allJobsBox[i].style.display = 'grid';
                        // filtering(null, false);
                    }


                });


                if (removeFilter === true) {
                    for (let z = 0; z < allJobsBox.length; z++) {
                        allJobsBox[z].style.display = 'grid';
                    }
                    arr = arr.filter((ele) => {
                        return ele !== filter;
                    });

                    filtering(null, false);
                    // console.log(arr);
                }


            }
            if (filter === null && removeFilter === true) {
                // allJobsBox.forEach(ele => {
                //     ele.style.display = 'grid';
                // });
                allJobsBox.forEach(ele => {

                    ele.style.display = 'grid';
                })
            }
        }

    }


}())






// let arr = ['data-role', 'data-level', 'data-position', 'data-contract', 'data-languages']