package crud;

public class Pojo {
    private int slNo;
    private String businessCode;
    private int custNumber;
    private java.sql.Date clearDate;
    private int businessYear;
    private String docID;
    private java.sql.Date postingDate;
    private java.sql.Date documentCreateDate;
    private java.sql.Date dueInDate;
    private String invoiceCurrency;
    private String documentType;
    private int postingID;
    private Double totalOpenAmount;
    private java.sql.Date baselineCreateDate;
    private String custPaymentTerms;
    private int invoiceID;
    private int isOpen;
    private String predictedDate;
    private String agingBucket;

    public int getSlNo() {
        return slNo;
    }

    public void setSlNo(int slNo) {
        this.slNo = slNo;
    }

    public String getBusinessCode() {
        return businessCode;
    }

    public void setBusinessCode(String businessCode) {
        this.businessCode = businessCode;
    }

    public int getCustNumber() {
        return custNumber;
    }

    public void setCustNumber(int custNumber) {
        this.custNumber = custNumber;
    }

    public java.sql.Date getClearDate() {
        return clearDate;
    }

    public void setClearDate(java.sql.Date clearDate) {
        this.clearDate = clearDate;
    }

    public int getBuisnessYear() {
        return businessYear;
    }

    public void setBusinessYear(int businessYear) {
        this.businessYear = businessYear;
    }

    public String getDocID() {
        return docID;
    }

    public void setDocID(String docID) {
        this.docID = docID;
    }

    public java.sql.Date getPostingDate() {
        return postingDate;
    }

    public void setPostingDate(java.sql.Date postingDate) {
        this.postingDate = postingDate;
    }

    public java.sql.Date getDocumentCreateDate() {
        return documentCreateDate;
    }

    public void setDocumentCreateDate(java.sql.Date documentCreateDate) {
        this.documentCreateDate = documentCreateDate;
    }

    public java.sql.Date getDueInDate() {
        return dueInDate;
    }

    public void setDueInDate(java.sql.Date dueInDate) {
        this.dueInDate = dueInDate;
    }

    public String getInvoiceCurrency() {
        return invoiceCurrency;
    }

    public void setInvoiceCurrency(String invoiceCurrency) {
        this.invoiceCurrency = invoiceCurrency;
    }

    public String getDocumentType() {
        return documentType;
    }

    public void setDocumentType(String documentType) {
        this.documentType = documentType;
    }

    public int getPostingID() {
        return postingID;
    }

    public void setPostingID(int postingID) {
        this.postingID = postingID;
    }

    public Double getTotalOpenAmount() {
        return totalOpenAmount;
    }

    public void setTotalOpenAmount(Double totalOpenAmount) {
        this.totalOpenAmount = totalOpenAmount;
    }

    public java.sql.Date getBaselineCreateDate() {
        return baselineCreateDate;
    }

    public void setBaselineCreateDate(java.sql.Date baselineCreateDate) {
        this.baselineCreateDate = baselineCreateDate;
    }

    public String getCustPaymentTerms() {
        return custPaymentTerms;
    }

    public void setCustPaymentTerms(String custPaymentTerms) {
        this.custPaymentTerms = custPaymentTerms;
    }

    public int getInvoiceID(){
        return invoiceID;
    }

    public void setInvoiceID(int invoiceID){
        this.invoiceID = invoiceID;
    }

    public int getIsOpen(){
        return isOpen;
    }

    public void setIsOpen(int isOpen){
        this.isOpen = isOpen;
    }
    
    public String getPredictedDate(String predictedDate) {
    	return this.predictedDate;
    }
    
    public void setPredictedDate(String predictedDate) {
    	this.predictedDate = predictedDate;
    }
    
    public String getAgingBucket(String agingBucket) {
    	return this.agingBucket;
    }
    
    public void setAgingBucket(String agingBucket) {
    	this.agingBucket = agingBucket;
    }
}