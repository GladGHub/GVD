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
    </script>
