export const useToolsMarquee = () => {
  const tools = [
    'ansible.png', 'argocd.png', 'aws.png', 'docker.png', 'kubernetes.png',
    'elasitc.png', 'fluxcd.png', 'gcp.png', 'git.png', 'github.png',
    'grafana-loki.png', 'grafana.png', 'jenkins.png', 'ceph.png',
    'linux.png', 'nginx.png', 'prometheus.png', 'terraform.png'
  ];

  const duplicatedTools = [...tools, ...tools];

  return {
    tools: duplicatedTools
  };
};
