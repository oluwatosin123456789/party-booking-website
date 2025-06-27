class ScrollAnimator {
  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    this.init();
  }

  init() {
    document.querySelectorAll('[data-aos]').forEach(el => {
      this.observer.observe(el);
    });
  }
}