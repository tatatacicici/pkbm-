import { Certificates } from '../models/Certificates';

export class CertificateService {
  async getUserCertificates(userId: string) {
    return await Certificates.findAll({
      where: { studentId: userId, deletedAt: null as any } as any,
      order: [['createdAt', 'DESC']],
    });
  }

  async getSubjectCertificates(userId: string) {
    return await Certificates.findAll({
      where: { 
        studentId: userId, 
        type: 'SUBJECT',
        deletedAt: null as any
      } as any,
      order: [['createdAt', 'DESC']],
    });
  }

  async getEventCertificates(userId: string) {
    return await Certificates.findAll({
      where: { 
        studentId: userId, 
        type: 'EVENT',
        deletedAt: null as any
      } as any,
      order: [['createdAt', 'DESC']],
    });
  }
}
