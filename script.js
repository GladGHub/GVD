 <script>
        // Sample districts for the selected states (you can add more)
        const districts = {
            "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],
            "Karnataka": ["Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Yadgir"],
            "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
            // Add more states and their respective districts here
        };

        function populateDistricts() {
            const stateSelect = document.getElementById("state");
            const districtSelect = document.getElementById("district");
            const selectedState = stateSelect.options[stateSelect.selectedIndex].value;
            districtSelect.innerHTML = ""; // Clear the previous options

            if (selectedState !== "") {
                const stateDistricts = districts[selectedState];
                for (let i = 0; i < stateDistricts.length; i++) {
                    const option = document.createElement("option");
                    option.text = stateDistricts[i];
                    districtSelect.add(option);
                }
            } else {
                const option = document.createElement("option");
                option.text = "Select District";
                option.disabled = true;
                option.selected = true;
                districtSelect.add(option);
            }
        } 
document.addEventListener('DOMContentLoaded', function() 
                          {
  const animatedBoy = document.getElementById('animated-boy');
  animatedBoy.style.animation = 'none'; // Disable the animation initially
  setTimeout(() => {
    animatedBoy.style.animation = ''; // Enable the animation after a short delay
  }, 1000);
});
    </script>

<script>
        let slideIndex = 1;
        showSlide(slideIndex);

        function showSlide(n) {
            const slides = document.getElementsByClassName('ad-container');
            const dots = document.getElementsByClassName('dot');

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }

            slides[slideIndex - 1].classList.add('active');
            dots[slideIndex - 1].classList.add('active');
        }

        function nextSlide() {
            showSlide(slideIndex += 1);
        }

        function previousSlide() {
            showSlide(slideIndex -= 1);
        }

        function currentSlide(n) {
            showSlide(slideIndex = n);
        }

        setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
    </script>
