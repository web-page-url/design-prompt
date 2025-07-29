
        // Add subtle background animation
        document.addEventListener('DOMContentLoaded', function() {
            const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#f72585'];
            let currentIndex = 0;
            
            function changeGradient() {
                document.body.style.background = `linear-gradient(135deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
                currentIndex = (currentIndex + 1) % colors.length;
            }
            
            // Change gradient every 10 seconds
            setInterval(changeGradient, 10000);
        });
        
        // New copy functionality
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', function() {
                const promptText = this.parentElement.querySelector('.prompt-text').textContent;
                navigator.clipboard.writeText(promptText).then(() => {
                    // Visual feedback
                    const originalHTML = this.innerHTML;
                    this.classList.add('copied');
                    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"></path></svg>';
                    
                    // Revert after 2 seconds
                    setTimeout(() => {
                        this.classList.remove('copied');
                        this.innerHTML = originalHTML;
                    }, 2000);
                });
            });
        });

        // Copy all button functionality
        const copyAllBtn = document.getElementById('copy-all-btn');
        if (copyAllBtn) {
            copyAllBtn.addEventListener('click', function() {
                const promptElements = document.querySelectorAll('.prompt-text');
                let allText = '';
                promptElements.forEach((el, index) => {
                    allText += `${index + 1}. ${el.textContent}\n`;
                });

                navigator.clipboard.writeText(allText).then(() => {
                    const originalText = this.textContent;
                    this.classList.add('copied');
                    this.textContent = 'Copied!';

                    setTimeout(() => {
                        this.classList.remove('copied');
                        this.textContent = originalText;
                    }, 2000);
                });
            });
        }
  