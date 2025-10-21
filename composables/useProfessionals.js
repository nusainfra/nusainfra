export const useProfessionals = () => {
  const professionals = ref([
    {
      "id": 2,
      "name": "Aditia Darmita",
      "photo": "/img/profesional/aditia.jpg",
      "role": "Security Engineer",
      "company": "PT Allo Fresh Indonesia"
    },
  ]);

  const containerClass = computed(() => {
    return professionals.value.length <= 2
      ? 'flex flex-wrap justify-center gap-8'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
  });

  return {
    professionals,
    containerClass
  };
};
