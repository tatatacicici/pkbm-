import { Certificates } from '../models/Certificates';

export class CertificateService {
  async getUserCertificates(userId: string) {
    return await Certificates.findAll({
      where: { userId, deletedAt: null },
      order: [['createdAt', 'DESC']],
    });
  }

  async getSubjectCertificates(userId: string) {
    return await Certificates.findAll({
      where: { 
        userId, 
        type: 'SUBJECT',
        deletedAt: null 
      },
      order: [['createdAt', 'DESC']],
    });
  }

  async getEventCertificates(userId: string) {
    return await Certificates.findAll({
      where: { 
        userId, 
        type: 'EVENT',
        deletedAt: null 
      },
      order: [['createdAt', 'DESC']],
    });
  }
}
